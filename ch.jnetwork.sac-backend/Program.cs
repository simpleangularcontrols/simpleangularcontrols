using Newtonsoft.Json.Serialization;
using System.Runtime;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<ForwardedHeadersOptions>(opts =>
{
    opts.ForwardedHeaders = Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedFor
                            | Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedProto
                            | Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedHost;
});

builder.Services.AddCors(o =>
{
    o.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowCredentials()
              .AllowAnyMethod()
              .AllowAnyHeader()
              .WithExposedHeaders("range")
              .Build();
    });
});

builder.Services.AddControllers()
                .AddNewtonsoftJson(opts =>
                {
                    opts.SerializerSettings.ContractResolver = new DefaultContractResolver();
                });


var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseForwardedHeaders();
app.UseAuthorization();
app.UseCors();

app.MapControllers();

app.Run();
