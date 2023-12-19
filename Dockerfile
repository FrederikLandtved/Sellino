#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Sellino.API/Sellino.API.csproj", "Sellino.API/"]
COPY ["Sellino.Domain/Sellino.Domain.csproj", "Sellino.Domain/"]
COPY ["Sellino.Service/Sellino.Service.csproj", "Sellino.Service/"]
RUN dotnet restore "Sellino.API/Sellino.API.csproj"
COPY . .
WORKDIR "/src/Sellino.API"
RUN dotnet build "Sellino.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Sellino.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Sellino.API.dll"]