using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;

namespace Build.context
{
    public class Lifetime : FrostingLifetime<BuildContext>
    {
        public override void Setup(BuildContext context)
        {
            context.Log.Information("Setup Build");

            // Task for Build Setup

            context.Log.Information("Setup Build - Done");
        }

        public override void Teardown(BuildContext context, ITeardownContext info)
        {
            context.Log.Information("Clean Build");
        }
    }
}