using Build.context;
using Build.extensions;
using Cake.Core.Diagnostics;
using Cake.Frosting;
using Cake.Npm;
using Cake.Npm.Install;

namespace Build.tasks
{
    [TaskName("NpmInstall")]
    [TaskDescription("Install NPM Packages")]
    public class NpmInstall : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            context.Log.Information("Install required NPM Packages");

            context.Log.Debug(context.ProjectDirectory.ToDirectoryPath());

            NpmInstallSettings settings = new NpmInstallSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            context.NpmInstall(settings);
        }
    }
}