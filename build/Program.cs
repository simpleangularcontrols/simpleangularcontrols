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
            .InstallTool(new Uri("nuget:?package=NuGet.CommandLine&version=5.11.7"))
            .InstallTool(new Uri("dotnet:?package=dotnet-reportgenerator-globaltool&version=5.5.1"))
            .InstallTool(new Uri("nuget:?package=CodecovUploader&version=0.8.0"))
            .Run(args);
    }
}