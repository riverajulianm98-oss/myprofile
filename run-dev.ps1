# Ejecución recomendada del servidor de desarrollo cuando Node/npm no están en el PATH del terminal.
# Ejecuta desde PowerShell:
#   .\run-dev.ps1

$nodeJsPath = "C:\Program Files\nodejs"

if (-not ($env:Path -split ';' | Where-Object { $_ -eq $nodeJsPath })) {
  $env:Path = "$nodeJsPath;$env:Path"
}

npm run dev
