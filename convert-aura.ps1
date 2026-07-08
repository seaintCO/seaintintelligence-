$ErrorActionPreference = "Stop"

$raw = Get-Content ".\aura.html" -Raw

$raw = $raw -replace '<!-- aura-ga4-start -->[\s\S]*?<!-- aura-ga4-end -->', ''
$raw = $raw -replace 'style=" filter: blur\(8px\);"', ''
$raw = $raw -replace 'filter: blur\(10px\);', ''

$raw = $raw -replace 'Fluxa', 'SEAINT Intelligence'
$raw = $raw -replace 'AI Finance Platform', 'AI Software & Business Systems'
$raw = $raw -replace 'Product', 'Solutions'
$raw = $raw -replace 'Pricing', 'Process'
$raw = $raw -replace 'Security', 'Company'
$raw = $raw -replace 'Get started', 'Book Now'
$raw = $raw -replace 'Book demo', 'Explore Solutions'
$raw = $raw -replace 'Capital for modern businesses, from approval to payout\.', 'Intelligent systems for modern businesses.'
$raw = $raw -replace 'Fluxa automates underwriting, disbursement, and repayment\s+tracking, so you can grow with confidence\.', 'SEAINT Intelligence builds AI employees, intelligent websites, booking systems, automations, dashboards, and custom software for modern businesses.'
$raw = $raw -replace 'Lending operations console', 'Business intelligence console'
$raw = $raw -replace 'Underwriting pipeline', 'AI systems pipeline'
$raw = $raw -replace 'Decisioning', 'AI Agents'
$raw = $raw -replace 'Payouts', 'Booking'
$raw = $raw -replace 'Monitoring', 'Analytics'
$raw = $raw -replace 'Integrations', 'Automation'
$raw = $raw -replace 'Applications', 'Leads'
$raw = $raw -replace 'Auto-routed', 'Automated'
$raw = $raw -replace 'Risk drift', 'System health'
$raw = $raw -replace 'Approval automation', 'Business automation'
$raw = $raw -replace 'Apex Innovations LLC', 'AI Receptionist'
$raw = $raw -replace 'Approved limit routed to payout', 'Live calls routed to booking'
$raw = $raw -replace 'Northwind Trading', 'CRM Pipeline'
$raw = $raw -replace 'Manual review requested', 'New lead captured'
$raw = $raw -replace 'Ready to fund', 'Ready to launch'
$raw = $raw -replace '\$250,000', 'AI SYSTEM'
$raw = $raw -replace 'Payout triggered after approval policy, document check, and bank\s+verification\.', 'System activated after AI setup, booking flow, CRM connection, and automation testing.'
$raw = $raw -replace 'Risk signals normal', 'Systems online'
$raw = $raw -replace 'Automated underwriting', 'AI business systems'
$raw = $raw -replace 'AI evaluates risk and approves credit in real time\.', 'AI handles leads, calls, booking, follow-up, and customer workflows.'
$raw = $raw -replace 'Instant disbursement', 'Instant deployment'
$raw = $raw -replace 'Funds delivered securely in minutes, not days\.', 'Launch websites, dashboards, agents, and automations without slow agency timelines.'
$raw = $raw -replace 'Repayment intelligence', 'Revenue intelligence'
$raw = $raw -replace 'AI tracks repayments and predicts risk before it happens\.', 'Track leads, bookings, analytics, and customer activity from one intelligent system.'
$raw = $raw -replace 'Trusted by modern lending teams', 'Built for modern business teams'
$raw = $raw -replace 'Everything you need, built to perform\.', 'Everything your business needs, built to perform.'
$raw = $raw -replace 'financial workflow', 'business workflow'
$raw = $raw -replace 'Secure &amp; compliant', 'Secure systems'
$raw = $raw -replace 'sensitive financial operations', 'business operations'

$css = ""
foreach ($m in [regex]::Matches($raw, '<style[^>]*>([\s\S]*?)</style>')) {
  $css += "`n" + $m.Groups[1].Value + "`n"
}

if ($raw -match '<body[^>]*>([\s\S]*?)</body>') {
  $body = $Matches[1]
} else {
  $body = $raw
}

$body = $body -replace '<script[^>]*src="https://cdn.tailwindcss.com"[^>]*></script>', ''
$body = $body -replace '<script[^>]*src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"[^>]*></script>', ''
$body = $body -replace '<script[\s\S]*?</script>', ''

function Between($text, $start, $end) {
  $s = $text.IndexOf($start)
  if ($s -lt 0) { return "" }
  $e = $text.IndexOf($end, $s)
  if ($e -lt 0) { return $text.Substring($s) }
  return $text.Substring($s, ($e - $s) + $end.Length)
}

$navbar = Between $body "<header" "</header>"
$hero = Between $body '<div class="grid gap-12' "</div>`r`n`r`n        <div class=`"grid md:grid-cols-3"
if ($hero -eq "") { $hero = Between $body '<div class="grid gap-12' '<section class="border-t border-slate-200 bg-white' }

$stats = Between $body '<div class="grid md:grid-cols-3' '<section class="border-t border-slate-200 bg-white'
$logo = Between $body '<section class="border-t border-slate-200 bg-white' '</section>'
$features = Between $body '<section class="relative overflow-hidden bg-white"' '</body>'
if ($features -eq "") { $features = $body.Substring([Math]::Min($body.Length, [Math]::Max(0, $body.IndexOf('<section class="relative overflow-hidden bg-white"')))) }

$dashboard = Between $body '<div class="relative mx-auto h-[620px]' '<div class="grid md:grid-cols-3'

function SaveHtml($path, $html) {
  $json = $html | ConvertTo-Json -Compress
  [System.IO.File]::WriteAllText((Resolve-Path ".").Path + "\$path", "export const html = $json;", [System.Text.UTF8Encoding]::new($false))
}

SaveHtml "lib\navbar-html.ts" $navbar
SaveHtml "lib\hero-html.ts" $hero
SaveHtml "lib\dashboard-html.ts" $dashboard
SaveHtml "lib\stats-html.ts" $stats
SaveHtml "lib\logo-html.ts" $logo
SaveHtml "lib\features-html.ts" $features

$cssOut = @"
@import "tailwindcss";

$css

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: white;
  color: #020617;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
"@

[System.IO.File]::WriteAllText((Resolve-Path ".\styles").Path + "\aura.css", $cssOut, [System.Text.UTF8Encoding]::new($false))
