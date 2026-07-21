<?php
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    $error = 'Please complete every field before sending your message.';
} else {
    $error = '';
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Magdelen Shopping Center</title>
    <link rel="stylesheet" href="../css/style.css" />
    <style>
      body {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
      }

      .result-card {
        width: min(560px, 100%);
        padding: 28px;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.24);
      }

      .result-card a {
        display: inline-block;
        margin-top: 12px;
        color: var(--accent);
        text-decoration: none;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <div class="result-card">
      <?php if ($error !== ''): ?>
        <p class="eyebrow">Notice</p>
        <h2><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></h2>
        <a href="../../index.html">Go back to the shop</a>
      <?php else: ?>
        <p class="eyebrow">Message received</p>
        <h2>Thank you, <?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?>!</h2>
        <p>We have received your note and will get back to you soon at <?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?>.</p>
        <p><?= htmlspecialchars($message, ENT_QUOTES, 'UTF-8') ?></p>
        <a href="../../index.html">Back to the shop</a>
      <?php endif; ?>
    </div>
  </body>
</html>

