using Build.context;
using Build.extensions;
using Cake.Common;
using Cake.Common.Diagnostics;
using Cake.Core.Diagnostics;
using Cake.Core.IO;
using Cake.Frosting;
using Cake.Json;
using Newtonsoft.Json.Linq;
using Octokit;
using System.Threading.Tasks;

namespace Build.tasks
{
    [TaskName("GithubRelease")]
    [TaskDescription("Create Github Release")]
    public class GithubRelease : AsyncFrostingTask<BuildContext>
    {
        public override async Task RunAsync(BuildContext context)
        {
            await base.RunAsync(context);

            string version = GetVersion(context);

            var ghClient = new GitHubClient(new ProductHeaderValue("jnetwork.ch.simpleangularcontrols"))
            {
                Credentials = new Credentials(context.GithubToken)
            };

            var newRelease = new NewRelease(version)
            {
                Name = version,
                TargetCommitish = context.GitBranchName,
                MakeLatest = MakeLatestQualifier.False, // set only True on highest Angular Version
                Prerelease = context.ReleaseType == ReleaseType.PreRelease,
                GenerateReleaseNotes = true
            };

            context.Information($"Create github release notes '{version}' with Branch {context.GitBranchName}");

            await ghClient.Repository.Release.Create(context.GithubRepositoryOwner,
                                                     context.GithubRepositoryName,
                                                     newRelease);
        }

        public override bool ShouldRun(BuildContext context)
        {
            return !string.IsNullOrEmpty(context.GithubToken) && !context.HasArgument("nopublish");
        }

        private string GetVersion(BuildContext context)
        {
            FilePath commonPackage = context.Environment.WorkingDirectory.Combine(context.DirectoryProject.ToDirectoryPath()).CombineWithFilePath(new FilePath("./dist/sac-common/package.json"));

            JObject commonJson = context.ParseJsonFromFile(commonPackage);
            string commonVersion = commonJson["version"].Value<string>();

            context.Log.Information($"Common Version is {commonVersion}");

            return commonVersion;
        }
    }
}