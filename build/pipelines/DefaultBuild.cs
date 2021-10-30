using Build.context;
using Build.tasks;
using Cake.Core.Diagnostics;
using Cake.Frosting;

namespace Build.pipelines
{
    /// <summary>
    /// Default Pipeline
    /// </summary>
    [TaskName("default")]
    [TaskDescription("Default Task without publishing")]
    [IsDependentOn(typeof(NpmBuild))]
    public class DefaultBuild : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Main Task
        /// </summary>
        /// <param name="context"></param>

        public override void Run(BuildContext context)
        {
            base.Run(context);

            context.Log.Information("Task done");
        }
    }
}