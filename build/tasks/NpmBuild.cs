using Build.context;
using Build.extensions;
using Cake.Frosting;
using Cake.Npm;
using Cake.Npm.RunScript;

namespace Build.tasks
{
    [TaskName("NpmBuild")]
    [TaskDescription("Build NPM Packages")]
    [IsDependentOn(typeof(NpmInstall))]
    [IsDependentOn(typeof(NpmVersion))]
    public class NpmBuild : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            // Build Common
            BuildCommon(context);

            // Build Bootstrap 3
            BuildBootstrap3(context);

            // Build Bootstrap 4
            BuildBootstrap4(context);

            // Build Bootstrap 5
            BuildBootstrap5(context);
        }

        /// <summary>
        /// Build Common Library
        /// </summary>
        /// <param name="context">Buildcontext</param>
        internal static void BuildCommon(BuildContext context)
        {
            NpmRunScriptSettings settings = new NpmRunScriptSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            settings.ScriptName = "build-common";

            context.NpmRunScript(settings);
        }

        /// <summary>
        /// Build Bootstrap 3 Library
        /// </summary>
        /// <param name="context">Buildcontext</param>
        private void BuildBootstrap3(BuildContext context)
        {
            NpmRunScriptSettings settings = new NpmRunScriptSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            settings.ScriptName = "build-bs3";

            context.NpmRunScript(settings);
        }

        /// <summary>
        /// Build Bootstrap 4 Library
        /// </summary>
        /// <param name="context">Buildcontext</param>
        private void BuildBootstrap4(BuildContext context)
        {
            NpmRunScriptSettings settings = new NpmRunScriptSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            settings.ScriptName = "build-bs4";

            context.NpmRunScript(settings);
        }

        /// <summary>
        /// Build Bootstrap 5 Library
        /// </summary>
        /// <param name="context">Buildcontext</param>
        private void BuildBootstrap5(BuildContext context)
        {
            NpmRunScriptSettings settings = new NpmRunScriptSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            settings.ScriptName = "build-bs5";

            context.NpmRunScript(settings);
        }
    }
}