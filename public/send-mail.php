<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$allowedOrigin = '';
if (!empty($_SERVER['HTTP_ORIGIN'])) {
    $allowedOrigin = $_SERVER['HTTP_ORIGIN'];
}
if ($allowedOrigin !== '') {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

function fieldValue(array $data, string $key): string
{
    $value = $data[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }
    // Strip anything that could be used for header/CRLF injection.
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

$naam = fieldValue($data, 'naam');
$bedrijf = fieldValue($data, 'bedrijf');
$email = fieldValue($data, 'email');
$locatie = fieldValue($data, 'locatie');

if ($naam === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'invalid_input']);
    exit;
}

$to = 'info@idc-cleaning.nl';
$subject = 'Inspectie aanvragen';

$bodyLines = [
    "Naam: $naam",
    'Bedrijf: ' . ($bedrijf !== '' ? $bedrijf : '-'),
    "E-mail: $email",
    'Locatie en object: ' . ($locatie !== '' ? $locatie : '-'),
];
$body = implode("\n", $bodyLines);

$headers = [
    'From: IDC Website <no-reply@idc-cleaning.nl>',
    "Reply-To: $email",
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

echo json_encode(['ok' => true]);
