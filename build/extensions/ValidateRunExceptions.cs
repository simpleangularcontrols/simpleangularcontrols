using Build.context;
using Cake.Core;
using Cake.Core.Diagnostics;
using Cake.Frosting;
using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace Build.extensions
{
    public static class ValidateRunExceptions
    {
        public static void ValidateRunException(this BuildContext context)
        {
            if (context == null || context.FailedTasks == null || !context.FailedTasks.Any())
            {
                return;
            }

            // Discover all task type names in this assembly that inherit from FrostingTask<BuildContext>
            var taskTypeNames = typeof(ValidateRunExceptions).Assembly
                .GetTypes()
                .Where(t => t.IsClass && !t.IsAbstract)
                .Where(t => InheritsFromFrostingTaskOfBuildContext(t))
                .Select(t => t.Name)
                .ToHashSet(StringComparer.OrdinalIgnoreCase);

            var failedTasks = context.FailedTasks.ToList();

            var knownFailures = failedTasks.Where(taskTypeNames.Contains).ToList();
            var unknownFailures = failedTasks.Except(knownFailures, StringComparer.OrdinalIgnoreCase).ToList();

            // Log known task failures with a clearer message
            foreach (var name in knownFailures)
            {
                context.Log.Error("{0} failed. See above for details.", Humanize(name));
            }

            // Log unknown task failures with a generic message
            foreach (var name in unknownFailures)
            {
                context.Log.Error("Task '{0}' failed. See above for details.", name);
            }

            // If any failures exist, throw a single aggregated exception
            if (failedTasks.Any())
            {
                throw new CakeException($"Tasks failed: {string.Join(", ", failedTasks)}");
            }
        }

        private static bool InheritsFromFrostingTaskOfBuildContext(Type type)
        {
            var current = type;
            while (current != null && current != typeof(object))
            {
                if (current.IsGenericType)
                {
                    var genericDef = current.GetGenericTypeDefinition();
                    if (genericDef == typeof(FrostingTask<>))
                    {
                        var args = current.GetGenericArguments();
                        if (args.Length == 1 && args[0] == typeof(BuildContext))
                        {
                            return true;
                        }
                    }
                }
                current = current.BaseType;
            }
            return false;
        }

        private static string Humanize(string pascalCase)
        {
            if (string.IsNullOrWhiteSpace(pascalCase))
            {
                return pascalCase;
            }

            // Insert spaces before capital letters and trim
            var human = Regex.Replace(pascalCase, "([a-z0-9])([A-Z])", "$1 $2");
            // Also split common suffixes like "Run" (optional): "CypressRun" -> "Cypress Run"
            return human.Trim();
        }
    }
}