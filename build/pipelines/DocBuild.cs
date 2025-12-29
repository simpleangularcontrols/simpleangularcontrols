using Build.context;
using Build.extensions;
using Build.tasks;
using Cake.Core.Diagnostics;
using Cake.Frosting;

namespace Build.pipelines
{
    /// <summary>
    /// Release Runner Pipeline
    /// </summary>
    [TaskName("doc")]
    [TaskDescription("Create the documentation")]
    [IsDependentOn(typeof(NpmDoc))]
    [IsDependentOn(typeof(GitUpdateDoc))]
    public class DocBuild : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Main Task
        /// </summary>
        /// <param name="context"></param>

        public override void Run(BuildContext context)
        {
            base.Run(context);

            context.ValidateRunException();
            context.Log.Information("Task done");
        }
    }
}