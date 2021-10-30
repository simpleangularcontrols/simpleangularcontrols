dotnet restore ../build/Build.csproj
dotnet run --project ../build/Build.csproj -- $args
exit $LASTEXITCODE;