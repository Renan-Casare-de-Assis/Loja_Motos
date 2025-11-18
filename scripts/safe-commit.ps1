Param(
    [Parameter(Mandatory=$true)][string]$Message,
    [switch]$Push
)

# Script para criar temporariamente o arquivo que permite commits,
# executar o commit e então remover o arquivo de permissão.
Set-StrictMode -Version Latest
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Push-Location $root
try {
    New-Item -Path ".allow_commit" -ItemType File -Force | Out-Null
    git add -A
    git commit -m $Message
    if ($Push) {
        git push
    }
} finally {
    Remove-Item ".allow_commit" -ErrorAction SilentlyContinue
    Pop-Location
}
