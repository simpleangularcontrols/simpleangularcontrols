using Build.context;
using Build.tasks;
using Cake.Core.Diagnostics;
using Cake.Frosting;

namespace Build.pipelines
{
    /// <summary>
    /// Release Runner Pipeline
    /// </summary>
    [TaskName("release")]
    [TaskDescription("Create a new Release")]
    [IsDependentOn(typeof(NpmBuild))]
    [IsDependentOn(typeof(CypressRun))]
    [IsDependentOn(typeof(NpmPublish))]
    public class ReleaseBuild : FrostingTask<BuildContext>
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