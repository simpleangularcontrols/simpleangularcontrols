using Build.context;
using Cake.Core.Diagnostics;
using Cake.Frosting;

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

            context.Log.Information("Testing currently not implemented!");
        }
    }
}