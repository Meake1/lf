# 简单HTTP服务器脚本
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8000/')
$listener.Start()
Write-Host '服务器已启动: http://localhost:8000'
Write-Host '按Ctrl+C停止'

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    $requestedFile = Join-Path 'e:\eee' $context.Request.Url.LocalPath.TrimStart('/')

    if (Test-Path $requestedFile -PathType Leaf) {
        $content = Get-Content -Path $requestedFile -Raw
        $response.ContentLength64 = [System.Text.Encoding]::UTF8.GetByteCount($content)
        $response.OutputStream.Write([System.Text.Encoding]::UTF8.GetBytes($content), 0, [System.Text.Encoding]::UTF8.GetByteCount($content))
    } else {
        $response.StatusCode = 404
    }
    $response.Close()
}