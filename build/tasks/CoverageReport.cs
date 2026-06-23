using Build.context;
using Build.extensions;
using Cake.Codecov;
using Cake.Common;
using Cake.Common.Tools.ReportGenerator;
using Cake.Core.Diagnostics;
using Cake.Core.IO;
using Cake.Frosting;
using System;
using System.Collections.Generic;
using System.Linq;

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
                ReportTypes = new List<ReportGeneratorReportType> { ReportGeneratorReportType.MarkdownSummaryGithub, ReportGeneratorReportType.Html, ReportGeneratorReportType.Cobertura },
                WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                                       .Combine("projects")
                                                                       .Combine($"sac-{bootstrapVersion}"),
            };

            context.ReportGenerator(coverageReports, context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                                                         .Combine("reports")
                                                                                         .Combine($"coverage-{bootstrapVersion}"), setting);

            CopyToCodeCov(context, bootstrapVersion, coverageReports);
        }

        private static void CopyToCodeCov(BuildContext context, string bootstrapVersion, List<FilePath> coverageFiles)
        {
            if (string.IsNullOrEmpty(context.EnvironmentVariable<string>("CODECOV_TOKEN", string.Empty)))
            {
                context.Log.Warning("CODECOV_TOKEN environment variable is not set. Skipping Codecov upload.");
                return;
            }

            if (!coverageFiles.Any())
            {
                context.Log.Warning("No lcov.info reports were found for this upload.");
                return;
            }

            context.Log.Information($"Uploading {coverageFiles.Count()} reports to Codecov...");

            var settings = new CodecovSettings
            {
                Files = coverageFiles.Select(x => x.FullPath),
                Token = context.EnvironmentVariable<string>("CODECOV_TOKEN", string.Empty),
                Slug = "simpleangularcontrols/simpleangularcontrols",
                Flags = bootstrapVersion,
                Name = $"coverage-{bootstrapVersion}",
                Verbose = true
            };

            context.Codecov(settings);
        }
    }
}