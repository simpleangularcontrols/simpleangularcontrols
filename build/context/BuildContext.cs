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
        }

        public string ApiKey { get; } = "api:qqJa0eV7ziNiH80Con_A".ToBase64();
        public string ProjectDirectory { get; } = "../ch.jnetwork.jng-controls";
        public ReleaseType ReleaseType { get; set; }
    }
}