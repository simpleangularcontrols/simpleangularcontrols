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
    [IsDependentOn(typeof(NpmDoc))]
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

            RegisterRepo(context);

            // Create Packages
            PackNpm(context, "./dist/jngcontrols-common");
            PackNpm(context, "./dist/jngcontrols-bootstrap4");

            // Publish Package
            PublishNpm(context, "./dist/jngcontrols-common");
            PublishNpm(context, "./dist/jngcontrols-bootstrap4");
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

        private void RegisterRepo(BuildContext context)
        {
            context.NpmSet(setting => { setting.Key = "strict-ssl"; setting.Value = "false"; });
            context.NpmSet(setting => { setting.Key = "@jnetwork:registry"; setting.Value = "http://nuget.intra.jnetwork.ch/npm/jNetwork-NPM/"; });
            context.NpmSet(setting => { setting.Key = "//nuget.intra.jnetwork.ch/npm/jNetwork-NPM/:always-auth"; setting.Value = "true"; });
            context.NpmSet(setting => { setting.Key = "//nuget.intra.jnetwork.ch/npm/jNetwork-NPM/:_auth"; setting.Value = context.ApiKey; });
            context.NpmSet(setting => { setting.Key = "//nuget.intra.jnetwork.ch/npm/jNetwork-NPM/:email"; setting.Value = "info@jnetwork.ch"; });
        }

        private void SetPackageVersions(BuildContext context)
        {
            FilePath commonPackage = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/jngcontrols-common/package.json"));
            FilePath boostrap4Package = context.Environment.WorkingDirectory.Combine(context.ProjectDirectory.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/jngcontrols-bootstrap4/package.json"));

            JObject commonJson = context.ParseJsonFromFile(commonPackage);
            string commonVersion = commonJson["version"].Value<string>();

            JObject boostrap4Json = context.ParseJsonFromFile(boostrap4Package);
            string bootstrap4Version = boostrap4Json["version"].Value<string>();

            context.Log.Information($"Common Version is {commonVersion}");
            context.Log.Information($"Bootstrap 4 Version is {bootstrap4Version}");

            boostrap4Json["peerDependencies"]["@jnetwork/jngcontrols-common"] = commonVersion;
            context.SerializeJsonToPrettyFile<JObject>(boostrap4Package, boostrap4Json);
        }
    }
}