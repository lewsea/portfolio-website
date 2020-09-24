<?php
    $message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] != '') {
        if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $messageSubject = $_POST['subject'];
            $message = $_POST['message'];

            $to = 'luis.gudmalin@gmail.com';
            $body = "";

            $body .= "From: ".$userName. "\r\n";
            $body .= "Email: ".$userEmail. "\r\n";
            $body .= "Message: ".$message. "\r\n";

            mail($to, $messageSubject, $body);

            $message_sent = true;
        }
        else {
            $invalid_class_name = "form-invalid";
        }
    }
?> 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Luis Gudmalin | Front-End Web Developer & Designer</title>
    <link rel="shortcut icon" href="../img/icons/logo.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/main.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />
</head>

<body>
    <?php 
        if($message_sent):
    ?>
    <div id="contactModal" class="contact-modal">
        <i class="fas fa-check"></i>
        <hr>
        <h1>Success !</h1>
        <p>Thanks, your email has been sent.</p>
        <button id="closeBtnModal">OK</button>
    </div>
    <nav class="nav animation">
        <div class="nav__logo">
            <img src="../img/icons/logo.svg" alt="logo" />
        </div>
        <ul class="nav__list" id="nav__list">
            <li class='li'><span class="hov"></span><a href="/index.html" class="sova">home</a></li>
            <li class='li'><span class="hov"></span><a href="about.html" class="sova">about</a></li>
            <li class='li'><span class="hov"></span><a href="projects.html" class="sova">projects</a></li>
            <li class="active"><a href="contact.php">contact</a></li>
        </ul>
        <div class="nav__menu">
            <i class="fa fa-bars" id="menu__hamburg">
            </i>
        </div>
    </nav>
    <main class="contact">
        <div class="contact-container">
            <div class="contact__header">
                <h1>Let's start a project together</h1>
                <p>I am interested in freelance opportunities, a project collaboration or if you want to just say hi.
                    Don't hesitate to contact me by filling up the form below or send an email to <a
                        href="mailto:luis.gudmalin@gmail.com">luis.gudmalin&commat;gmail.com</a> and let's talk.</p>
            </div>
            <div class="contact__form">
                <form action="contact.php" method="POST" class="form">
                    <div class="form-group name">
                        <input type="text" class="name" id="name" name="name" placeholder="Name" tabindex="1" required>
                        <input type="email" class="email" id=" email" name="email" placeholder="Email" tabindex="2"
                            required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject"
                            tabindex="3" required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="message" name="message" placeholder="Message"
                            style="height: 200px;"></textarea>
                    </div>
                    <button type="submit" class="sendBtn">Send</button>
                </form>
            </div>
            <div class="contact__header">
                <h2>You can follow me or see what i'm doing here.</h2>
            </div>
            <div class="contact__social-links">
                <a href="https://twitter.com/leewseea" target="_blank" class="container-links">
                    <i class="fab fa-twitter"></i><span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/luis-gudmalin-8b0349195/" target="_blank" class="container-links">
                    <i class="fab fa-linkedin"></i><span>Linkedin</span>
                </a>
                <a href="https://github.com/lewsea" target="_blank" class="container-links">
                    <i class="fab fa-github"></i><span>Github</span>
                </a>
                <a href="https://codepen.io/Lewsea" target="_blank" class="container-links">
                    <i class="fab fa-codepen"></i><span>Codepen</span>
                </a>
            </div>
        </div>
    </main>

    <?php
    else:
    ?>
    
    <nav class="nav animation">
        <div class="nav__logo">
            <img src="../img/icons/logo.svg" alt="logo" />
        </div>
        <ul class="nav__list" id="nav__list">
            <li class='li'><span class="hov"></span><a href="/index.html" class="sova">home</a></li>
            <li class='li'><span class="hov"></span><a href="about.html" class="sova">about</a></li>
            <li class='li'><span class="hov"></span><a href="projects.html" class="sova">projects</a></li>
            <li class="active"><a href="contact.php">contact</a></li>
        </ul>
        <div class="nav__menu">
            <i class="fa fa-bars" id="menu__hamburg">
            </i>
        </div>
    </nav>
    <main class="contact">
        <div class="contact-container">
            <div class="contact__header">
                <h1>Let's start a project together</h1>
                <p>I am interested in freelance opportunities, a project collaboration or if you want to just say hi.
                    Don't hesitate to contact me by filling up the form below or send an email to <a
                        href="mailto:luis.gudmalin@gmail.com">luis.gudmalin&commat;gmail.com</a> and let's talk.</p>
            </div>
            <div class="contact__form">
                <form action="contact.php" method="POST" class="form">
                    <div class="form-group name">
                        <input type="text" class="name" id="name" name="name" placeholder="Name" tabindex="1" required>
                        <input type="email" class="email" id=" email" name="email" placeholder="Email" tabindex="2"
                            required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject"
                            tabindex="3" required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="message" name="message" placeholder="Message"
                            style="height: 200px;"></textarea>
                    </div>
                    <button type="submit" class="sendBtn">Send</button>
                </form>
            </div>
            <div class="contact__header">
                <h2>You can follow me or see what i'm doing here.</h2>
            </div>
            <div class="contact__social-links">
                <a href="https://twitter.com/leewseea" target="_blank" class="container-links">
                    <i class="fab fa-twitter"></i><span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/luis-gudmalin-8b0349195/" target="_blank" class="container-links">
                    <i class="fab fa-linkedin"></i><span>Linkedin</span>
                </a>
                <a href="https://github.com/lewsea" target="_blank" class="container-links">
                    <i class="fab fa-github"></i><span>Github</span>
                </a>
                <a href="https://codepen.io/Lewsea" target="_blank" class="container-links">
                    <i class="fab fa-codepen"></i><span>Codepen</span>
                </a>
            </div>
        </div>
    </main>
    <div class="minimap">
    </div>
    <?php
    endif;
    ?>
    <script src="../js/main.js" ></script>
    <script src="../js/contact.js" ></script>
</body>

</html>