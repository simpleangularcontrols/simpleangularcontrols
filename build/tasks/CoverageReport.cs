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
            CreateCodeCovReport(context, "bootstrap3", "bootstrap4", "bootstrap5");
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
        }

        private static void CreateCodeCovReport(BuildContext context, params string[] bootstrapVersions)
        {
            if (string.IsNullOrEmpty(context.EnvironmentVariable<string>("CODECOV_TOKEN", string.Empty)))
            {
                context.Log.Warning("CODECOV_TOKEN environment variable is not set. Skipping Codecov upload.");
                return;
            }

            List<FilePath> coverageReports = bootstrapVersions.Select(version => context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                                                                                     .Combine("coverage")
                                                                                                                     .Combine(version)
                                                                                                                     .CombineWithFilePath("lcov.info")
                                                                                                                     .Collapse()).ToList();

            if (!coverageReports.Any())
            {
                context.Log.Warning("No lcov.info reports were found for this upload.");
                return;
            }

            context.Log.Information($"Uploading {coverageReports.Count()} reports to Codecov...");

            var settings = new CodecovSettings
            {
                WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                                       .Combine("projects")
                                                                       .Collapse(),
                Files = coverageReports.Select(x => x.FullPath),
                Token = context.EnvironmentVariable<string>("CODECOV_TOKEN", string.Empty),
                Slug = "simpleangularcontrols/simpleangularcontrols",
                Flags = "angular-17"
            };

            context.Codecov(settings);
        }
    }
}