using Build.context;
using Build.extensions;
using Cake.Frosting;
using Cake.Npm;
using Cake.Npm.RunScript;

namespace Build.tasks
{
    [TaskName("NpmDoc")]
    [TaskDescription("Create Documentation")]
    [IsDependentOn(typeof(CypressRun))]
    public class NpmDoc : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            // Documentation Bootstrap 4
            DocBoostrap4(context);
        }

        private void DocBoostrap4(BuildContext context)
        {
            NpmRunScriptSettings settings = new NpmRunScriptSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath());
            settings.ScriptName = "compodoc-bs4";

            context.NpmRunScript(settings);
        }
    }
}