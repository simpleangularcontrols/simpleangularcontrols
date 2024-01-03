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
            NpmPublishSettings settings = new NpmPublishSettings()
            {
                Access = NpmPublishAccess.Public,
                WorkingDirectory = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).Combine(distFolder.ToDirectoryPath())
            };

            context.NpmPublish(settings);
        }

        private void SetPackageVersions(BuildContext context)
        {
            FilePath commonPackage = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/sac-common/package.json"));
            FilePath boostrap3Package = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/sac-bootstrap3/package.json"));
            FilePath boostrap4Package = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/sac-bootstrap4/package.json"));
            FilePath boostrap5Package = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/sac-bootstrap5/package.json"));

            JObject commonJson = context.ParseJsonFromFile(commonPackage);
            string commonVersion = commonJson["version"].Value<string>();

            JObject boostrap3Json = context.ParseJsonFromFile(boostrap3Package);
            string bootstrap3Version = boostrap3Json["version"].Value<string>();

            JObject boostrap4Json = context.ParseJsonFromFile(boostrap4Package);
            string bootstrap4Version = boostrap4Json["version"].Value<string>();

            JObject boostrap5Json = context.ParseJsonFromFile(boostrap5Package);
            string bootstrap5Version = boostrap5Json["version"].Value<string>();


            // Remove NYC Part
            if (boostrap3Json.ContainsKey("nyc"))
                boostrap3Json.Remove("nyc");

            // Remove NYC Part
            if (boostrap4Json.ContainsKey("nyc"))
                boostrap4Json.Remove("nyc");

            // Remove NYC Part
            if (boostrap5Json.ContainsKey("nyc"))
                boostrap5Json.Remove("nyc");

            context.Log.Information($"Common Version is {commonVersion}");
            context.Log.Information($"Bootstrap 3 Version is {bootstrap3Version}");
            context.Log.Information($"Bootstrap 4 Version is {bootstrap4Version}");
            context.Log.Information($"Bootstrap 5 Version is {bootstrap5Version}");

            boostrap3Json["peerDependencies"]["@simpleangularcontrols/sac-common"] = commonVersion;
            context.SerializeJsonToPrettyFile<JObject>(boostrap3Package, boostrap3Json);

            boostrap4Json["peerDependencies"]["@simpleangularcontrols/sac-common"] = commonVersion;
            context.SerializeJsonToPrettyFile<JObject>(boostrap4Package, boostrap4Json);

            boostrap5Json["peerDependencies"]["@simpleangularcontrols/sac-common"] = commonVersion;
            context.SerializeJsonToPrettyFile<JObject>(boostrap5Package, boostrap5Json);
        }
    }
}