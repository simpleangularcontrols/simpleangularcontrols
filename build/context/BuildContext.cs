using Build.extensions;
using Cake.Common;
using Cake.Core;
using Cake.Core.IO;
using Cake.Frosting;
using System.Collections.Generic;
using System.Linq;

namespace Build.context
{
    public class BuildContext : FrostingContext
    {
        public BuildContext(ICakeContext context)
            : base(context)
        {
            this.ReleaseType = ReleaseType.None;

            if (context.Arguments.HasArgument("patch"))
                ReleaseType = ReleaseType.Patch;

            if (context.Arguments.HasArgument("minor"))
                ReleaseType = ReleaseType.Minor;

            if (context.Arguments.HasArgument("major"))
                ReleaseType = ReleaseType.Major;

            if (context.Arguments.HasArgument("prerelease"))
                ReleaseType = ReleaseType.PreRelease;

            if (context.Arguments.HasArgument("apikey"))
            {
                this.ApiKey = context.Arguments.GetArgument("apikey").ToBase64();
            }

            if (context.HasArgument("GitHubToken"))
            {
                GithubToken = context.Argument<string>("GitHubToken");
            }
            else if (context.HasEnvironmentVariable("GITHUB_TOKEN"))
            {
                GithubToken = context.EnvironmentVariable("GITHUB_TOKEN");
            }
            else
            {
                GithubToken = string.Empty;
            }

            if (context.Arguments.HasArgument("apikey"))
            {
                this.ApiKey = context.Arguments.GetArgument("apikey").ToBase64();
            }

            var settings = new ProcessSettings
            {
                Arguments = "rev-parse --abbrev-ref HEAD",
                RedirectStandardOutput = true
            };

            int result = context.StartProcess("git", settings, out var redirectedOutput);
            GitBranchName = redirectedOutput?.FirstOrDefault()?.Trim() ?? "<unknown>";
        }

        public string ApiKey { get; }
        public string DirectoryDoc { get; } = "../docs";
        public string DirectoryProject { get; } = "../ch.jnetwork.sac-controls";
        public string DirectoryRoot { get; } = "..";
        public string GitBranchName { get; set; }
        public string GithubRepositoryName { get; set; } = "simpleangularcontrols";
        public string GithubRepositoryOwner { get; set; } = "simpleangularcontrols";
        public string GithubToken { get; private set; }
        public string GitName { get; } = "GitHub Actions";
        public string GitUsername { get; } = "actions@github.com";
        public ReleaseType ReleaseType { get; set; }

        public List<string> FailedTasks { get; } = new List<string>();
    }
}