using Build.context;
using Build.extensions;
using Cake.Core.Diagnostics;
using Cake.Core.IO;
using Cake.Frosting;
using Cake.Json;
using Cake.Npm;
using Cake.Npm.Pack;
using Cake.Npm.Publish;
using Newtonsoft.Json.Linq;

namespace Build.tasks
{
    [TaskName("NpmPublish")]
    [TaskDescription("Publish NPM to Store")]
    [IsDependentOn(typeof(NpmVersion))]
    public class NpmPublish : FrostingTask<BuildContext>
    {
        /// <summary>
        /// Run Task
        /// </summary>
        /// <param name="context">Build Context</param>
        public override void Run(BuildContext context)
        {
            base.Run(context);

            // Set Dependency Versions in Package JSON
            SetPackageVersions(context);

            // Create Packages
            PackNpm(context, "./dist/sac-common");
            PackNpm(context, "./dist/sac-bootstrap3");
            PackNpm(context, "./dist/sac-bootstrap4");
            PackNpm(context, "./dist/sac-bootstrap5");

            // Publish Package
            if (context.Arguments.HasArgument("nopublish"))
                return;

            PublishNpm(context, "./dist/sac-common");
            PublishNpm(context, "./dist/sac-bootstrap3");
            PublishNpm(context, "./dist/sac-bootstrap4");
            PublishNpm(context, "./dist/sac-bootstrap5");
        }

        private void PackNpm(BuildContext context, string distFolder)
        {
            NpmPackSettings settings = new NpmPackSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).Combine(distFolder.ToDirectoryPath());

            context.NpmPack(settings);
        }

        private void PublishNpm(BuildContext context, string distFolder)
        {
            NpmPublishSettings settings = new NpmPublishSettings();
            settings.WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).Combine(distFolder.ToDirectoryPath());

            context.NpmPublish(settings);
        }

        private void SetPackageVersions(BuildContext context)
        {
            FilePath commonPackage = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/sac-common/package.json"));
            FilePath boostrap4Package = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/sac-bootstrap4/package.json"));

            JObject commonJson = context.ParseJsonFromFile(commonPackage);
            string commonVersion = commonJson["version"].Value<string>();

            JObject boostrap4Json = context.ParseJsonFromFile(boostrap4Package);
            string bootstrap4Version = boostrap4Json["version"].Value<string>();

            // Remove NYC Part
            if (boostrap4Json.ContainsKey("nyc"))
                boostrap4Json.Remove("nyc");

            context.Log.Information($"Common Version is {commonVersion}");
            context.Log.Information($"Bootstrap 4 Version is {bootstrap4Version}");

            boostrap4Json["peerDependencies"]["@simpleangularcontrols/sac-common"] = commonVersion;
            context.SerializeJsonToPrettyFile<JObject>(boostrap4Package, boostrap4Json);
        }
    }
}