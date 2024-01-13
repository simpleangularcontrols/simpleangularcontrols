using Build.context;
using Build.extensions;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;
using Cake.Npx;

namespace Build.tasks
{
    [TaskName("CypressReport")]
    [TaskDescription("Run Cypress Tests")]
    public class CypressReport : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            context.Log.Information("Build markdown report file from testresult");

            ReportBs3();
            ReportBs4();
            ReportBs5();

            context.Log.Information("markdown created");

            void ReportBs3()
            {
                context.Npx("mochawesome-merge", args => args.Append("./reports/bs3/*.json")
                                                             .AppendSwitch("-o", "./reports/bs3.json")
                , settings =>
                {
                    settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
                });

                context.Npx("mochawesome-json-to-md", args => args.AppendSwitch("-p", "./reports/bs3.json")
                                                                  .AppendSwitch("-o", "./reports/bs3.md")
                                                                  .AppendSwitch("-t", "./node_modules/mochawesome-json-to-md/sample-template.md")
                , settings =>
                {
                    settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
                });
            }

            void ReportBs4()
            {
                context.Npx("mochawesome-merge", args => args.Append("./reports/bs4/*.json")
                                                             .AppendSwitch("-o", "./reports/bs4.json")
                , settings =>
                {
                    settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
                });

                context.Npx("mochawesome-json-to-md", args => args.AppendSwitch("-p", "./reports/bs4.json")
                                                                  .AppendSwitch("-o", "./reports/bs4.md")
                                                                  .AppendSwitch("-t", "./node_modules/mochawesome-json-to-md/sample-template.md")
                , settings =>
                {
                    settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
                });
            }

            void ReportBs5()
            {
                context.Npx("mochawesome-merge", args => args.Append("./reports/bs5/*.json")
                                                             .AppendSwitch("-o", "./reports/bs5.json")
                , settings =>
                {
                    settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
                });

                context.Npx("mochawesome-json-to-md", args => args.AppendSwitch("-p", "./reports/bs5.json")
                                                                  .AppendSwitch("-o", "./reports/bs5.md")
                                                                  .AppendSwitch("-t", "./node_modules/mochawesome-json-to-md/sample-template.md")
                , settings =>
                {
                    settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
                });
            }
        }

        public override bool ShouldRun(BuildContext context)
        {
            return !context.Arguments.HasArgument("notest");
        }
    }
}