using Build.context;
using Cake.Frosting;
using System;

/// <summary>
/// Main Build Programm
/// </summary>
public static class Program
{
    /// <summary>
    /// Main Method
    /// </summary>
    /// <param name="args">Build Arguments</param>
    /// <returns>Success State</returns>
    public static int Main(string[] args)
    {
        return new CakeHost()
            .UseContext<BuildContext>()
            .UseLifetime<Lifetime>()
            .InstallTool(new Uri("nuget:?package=NuGet.CommandLine&version=5.11.0"))
            .Run(args);
    }
}