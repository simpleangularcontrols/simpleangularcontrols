using Build.context;
using Build.tasks;
using Cake.Core.Diagnostics;
using Cake.Frosting;

namespace Build.pipelines
{
    /// <summary>
    /// Build Only Pipeline
    /// </summary>
    [TaskName("build")]
    [TaskDescription("Build Task without publishing")]
    [IsDependentOn(typeof(NpmBuild))]
    public class BuildBuild : FrostingTask<BuildContext>
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