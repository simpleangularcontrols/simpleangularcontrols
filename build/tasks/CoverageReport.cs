using Build.context;
using Build.extensions;
using Cake.Common.Tools.ReportGenerator;
using Cake.Core.IO;
using Cake.Frosting;
using System.Collections.Generic;

namespace Build.tasks
{
    [TaskName("CoverageReport")]
    [TaskDescription("Run Coverage Reporting")]
    public class CoverageReport : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            ConvertCoverageReport(context, "bootstrap3");
            ConvertCoverageReport(context, "bootstrap4");
            ConvertCoverageReport(context, "bootstrap5");
        }

        public override bool ShouldRun(BuildContext context)
        {
            return !context.Arguments.HasArgument("notest");
        }

        private static void ConvertCoverageReport(BuildContext context, string bootstrapVersion)
        {
            List<FilePath> coverageReports =
            [
                context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                    .Combine("coverage")
                                                    .Combine(bootstrapVersion)
                                                    .CombineWithFilePath("lcov.info"),
            ];

            ReportGeneratorSettings setting = new ReportGeneratorSettings
            {
                ReportTypes = new List<ReportGeneratorReportType> { ReportGeneratorReportType.MarkdownSummaryGithub },
                WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                                       .Combine("projects")
                                                                       .Combine($"sac-{bootstrapVersion}"),
            };

            context.ReportGenerator(coverageReports, context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                                                         .Combine("reports")
                                                                                         .Combine($"coverage-{bootstrapVersion}"), setting);
        }
    }
}