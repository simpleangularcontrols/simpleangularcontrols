using Build.context;
using Build.extensions;
using Cake.Core.Diagnostics;
using Cake.Frosting;
using Cake.Npm;
using Cake.Npm.BumpVersion;

namespace Build.tasks
{
    [TaskName("NpmVersion")]
    [TaskDescription("Set Version in NPM Packages")]
    public class NpmVersion : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            ChangeVersion(context, "./projects/sac-common");
            ChangeVersion(context, "./projects/sac-bootstrap3");
            ChangeVersion(context, "./projects/sac-bootstrap4");
            ChangeVersion(context, "./projects/sac-bootstrap5");
        }

        private static void ChangeVersion(BuildContext context, string project)
        {
            NpmBumpVersionSettings settings = new NpmBumpVersionSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath().Combine(project));

            switch (context.ReleaseType)
            {
                case ReleaseType.Patch:
                    settings.Version = "patch";
                    break;

                case ReleaseType.Minor:
                    settings.Version = "minor";
                    break;

                case ReleaseType.Major:
                    settings.Version = "major";
                    break;

                case ReleaseType.PreRelease:
                    settings.Version = "prerelease --preid=rc";
                    break;
            }

            context.Log.Information($"Change Version with Mode for '{project}': {context.ReleaseType}");

            if (context.ReleaseType != ReleaseType.None)
            {
                context.NpmBumpVersion(settings);
            }
        }
    }
}