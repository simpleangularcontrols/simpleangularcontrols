using Build.context;
using Build.extensions;
using Cake.Core.Diagnostics;
using Cake.Frosting;
using Cake.Npm;
using Cake.Npm.Install;
using Cake.Npm.RunScript;

namespace Build.tasks
{
    [TaskName("CypressRun")]
    [TaskDescription("Run Cypress Tests")]
    [IsDependentOn(typeof(NpmBuild))]
    public class CypressRun : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            context.Log.Information("Install NPM Packages for Cypress run");

            NpmInstallSettings installSettings = new NpmInstallSettings();
            installSettings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            context.NpmInstall(installSettings);

            context.Log.Information("Start Cypress run");

            NpmRunScriptSettings runSettings = new NpmRunScriptSettings();
            runSettings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            runSettings.ScriptName = "test-run";

            context.NpmRunScript(runSettings);

            context.Log.Information("Cypress run done");
        }
    }
}