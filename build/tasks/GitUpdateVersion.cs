using Build.context;
using Cake.Common;
using Cake.Common.Diagnostics;
using Cake.Core.IO;
using Cake.Frosting;
using System;

namespace Build.tasks
{
    [TaskName("GitUpdateVersion")]
    [TaskDescription("Commit new Version to Repository")]
    public class GitUpdateVersion : FrostingTask<BuildContext>
    {
        public override void Run(BuildContext context)
        {
            base.Run(context);

            // Set Git Account
            context.Information("Set Git Environment...");
            GitCommand(context, $"config --local user.email {context.GitUsername}");
            GitCommand(context, $"config --local user.name {context.GitName}");

            // 1. Alle Änderungen hinzufügen (inkl. neue Dateien und Löschungen). Nicht Supported in Cake.Git
            context.Information("Staging all changes...");
            GitCommand(context, $"add -A {context.Environment.WorkingDirectory.Combine(new DirectoryPath(context.DirectoryProject)).FullPath}/**/package.json");

            context.Information("Commit Doc");
            GitCommand(context, $"commit -m \"chore: Change Version for next Release\"");
            GitCommand(context, $"push");

            static void GitCommand(BuildContext context, string command)
            {
                IProcess process = context.StartAndReturnProcess("git", new ProcessSettings
                {
                    Arguments = command,
                    WorkingDirectory = context.Environment.WorkingDirectory.Combine(new DirectoryPath(context.DirectoryRoot))
                });
                process.WaitForExit();

                // Validate Result
                var exitCode = process.GetExitCode();
                if (exitCode != 0)
                {
                    throw new InvalidOperationException($"Error encountered when execute 'git'. Exit code {exitCode}");
                }
            }
        }

        public override bool ShouldRun(BuildContext context)
        {
            return context.ReleaseType != ReleaseType.None;
        }
    }
}