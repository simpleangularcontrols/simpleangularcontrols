using Build.context;
using Build.extensions;
using Cake.Codecov;
using Cake.Common;
using Cake.Common.IO;
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

            CopyToCodeCov(context, ["bootstrap3", "bootstrap4", "bootstrap5"]);
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

        private static void CopyToCodeCov(BuildContext context, string[] bootstrapVersions)
        {
            if (string.IsNullOrEmpty(context.EnvironmentVariable<string>("CODECOV_TOKEN", string.Empty)))
            {
                context.Log.Warning("CODECOV_TOKEN environment variable is not set. Skipping Codecov upload.");
                return;
            }

            // Alle lcov.info-Dateien im Verzeichnis suchen
            var coverageFiles = bootstrapVersions.Select(bsVersion => context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath())
                                                                                                          .Combine("coverage")
                                                                                                          .Combine(bsVersion)
                                                                                                          .GetFilePath("lcov.info"))
                                                  .Where(file => context.FileExists(file))
                                                  .ToList();

            if (!coverageFiles.Any())
            {
                context.Log.Warning("No lcov.info reports were found for this upload.");
                return;
            }

            context.Log.Information($"Uploading {coverageFiles.Count()} reports to Codecov...");

            // Direktaufruf über den Context (sucht automatisch nach der CODECOV_TOKEN Umgebungsvariable)
            context.Codecov(coverageFiles.Select(x => x.FullPath), context.EnvironmentVariable<string>("CODECOV_TOKEN", string.Empty));
        }
    }
}