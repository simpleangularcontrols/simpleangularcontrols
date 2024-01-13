using Build.context;
using Build.tasks;
using Cake.Core.Diagnostics;
using Cake.Frosting;

namespace Build.pipelines
{
    /// <summary>
    /// Test Runner Pipeline
    /// </summary>
    [TaskName("test")]
    [TaskDescription("Default Task without publishing")]
    [IsDependentOn(typeof(NpmBuild))]
    [IsDependentOn(typeof(CypressRun))]
    [IsDependentOn(typeof(CypressReport))]
    public class TestBuild : FrostingTask<BuildContext>
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