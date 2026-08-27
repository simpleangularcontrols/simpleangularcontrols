using Build.context;
using Build.extensions;
using Cake.Common.Diagnostics;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;
using Cake.Npm;
using Cake.Npm.Install;
using Cake.Npm.RunScript;
using System;
using System.Collections.Generic;

namespace Build.tasks
{
    [TaskName("CypressRun")]
    [TaskDescription("Run Cypress Tests")]
    public class CypressRun : FrostingTask<BuildContext>
    {
        private List<string> failedTasks = new List<string>();

        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            context.Log.Information("Install NPM Packages for Cypress run");

            NpmInstallSettings installSettings = new NpmInstallSettings();
            installSettings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath());
            context.NpmInstall(installSettings);

            context.Log.Information("Start Cypress run");

            TestBootstrap3();
            TestBootstrap4();
            TestBootstrap5();

            if (failedTasks.Count > 0)
            {
                context.Log.Error($"Cypress tests failed for: {string.Join(", ", failedTasks)}");
                throw new CakeException($"Cypress tests failed for: {string.Join(", ", failedTasks)}");
            }

            context.Log.Information("Cypress run done");

            void TestBootstrap3()
            {
                NpmRunScriptSettings runSettings = new NpmRunScriptSettings();
                runSettings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath());
                runSettings.ScriptName = "test-bs3";
                runSettings.HandleExitCode = (exitCode) =>
                {
                    if (exitCode != 0)
                    {
                        context.Log.Error($"Cypress tests failed with exit code {exitCode}");
                        failedTasks.Add("test-bs3");
                    }

                    return true;
                };

                context.NpmRunScript(runSettings);
            }

            void TestBootstrap4()
            {
                NpmRunScriptSettings runSettings = new NpmRunScriptSettings();
                runSettings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath());
                runSettings.ScriptName = "test-bs4";
                runSettings.HandleExitCode = (exitCode) =>
                {
                    if (exitCode != 0)
                    {
                        context.Log.Error($"Cypress tests failed with exit code {exitCode}");
                        failedTasks.Add("test-bs4");
                    }

                    return true;
                };

                context.NpmRunScript(runSettings);
            }

            void TestBootstrap5()
            {
                NpmRunScriptSettings runSettings = new NpmRunScriptSettings();
                runSettings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath());
                runSettings.ScriptName = "test-bs5";
                runSettings.HandleExitCode = (exitCode) =>
                                {
                                    if (exitCode != 0)
                                    {
                                        context.Log.Error($"Cypress tests failed with exit code {exitCode}");
                                        failedTasks.Add("test-bs5");
                                    }

                                    return true;
                                };

                context.NpmRunScript(runSettings);
            }
        }

        /// <summary>
        /// Handles an error that occurs during the build process by reporting the exception message to the build
        /// context.
        /// </summary>
        /// <param name="exception">The exception that was thrown during the build process. Cannot be null.</param>
        /// <param name="context">The build context used to report the error. Cannot be null.</param>
        public override void OnError(Exception exception, BuildContext context)
        {
            context.FailedTasks.Add(nameof(CypressRun));
            context.Error(exception.Message);
        }

        public override bool ShouldRun(BuildContext context)
        {
            return !context.Arguments.HasArgument("notest");
        }
    }
}