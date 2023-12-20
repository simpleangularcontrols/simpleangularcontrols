using Build.extensions;
using Cake.Core;
using Cake.Frosting;

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
        }

        public string ApiKey { get; }
        public string ProjectDirectory { get; } = "../ch.jnetwork.sac-controls";
        public ReleaseType ReleaseType { get; set; }
    }
}