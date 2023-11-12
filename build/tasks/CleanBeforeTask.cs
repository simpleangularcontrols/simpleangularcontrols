using Build.context;
using Cake.Common.IO;
using Cake.Core.Diagnostics;
using Cake.Core.IO;
using Cake.Frosting;

namespace Build.tasks
{
    [TaskName("CleanBefore")]
    [TaskDescription("Install NPM Packages")]
    public class CleanBeforeTask : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            context.Log.Information("Clean existing files");

            DirectoryPath coverageDirectory = context.Environment.WorkingDirectory.Combine(new DirectoryPath(context.ProjectDirectory)).Combine(new DirectoryPath("coverage"));

            if (context.DirectoryExists(coverageDirectory))
            {
                context.DeleteDirectory(coverageDirectory, new DeleteDirectorySettings()
                {
                    Recursive = true
                });
            }

            DirectoryPath nycDirectory = context.Environment.WorkingDirectory.Combine(new DirectoryPath(context.ProjectDirectory)).Combine(new DirectoryPath("projects/jngcontrols-bootstrap4/.nyc_output"));

            if (context.DirectoryExists(nycDirectory))
            {
                context.DeleteDirectory(nycDirectory, new DeleteDirectorySettings()
                {
                    Recursive = true
                });
            }
        }
    }
}