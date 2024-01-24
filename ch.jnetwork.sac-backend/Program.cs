using Newtonsoft.Json.Serialization;
using System.Runtime;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
                .AddNewtonsoftJson(opts =>
                {
                    opts.SerializerSettings.ContractResolver = new DefaultContractResolver();
                });

builder.Services.Configure<ForwardedHeadersOptions>(opts =>
{
    opts.ForwardedHeaders = Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedFor
                            | Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedProto
                            | Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedHost;
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseForwardedHeaders();
app.UseAuthorization();
app.MapControllers();

app.Run();
