import gnupg

gpg = gnupg.GPG()

def generate_key(_email: str, _pass: str) -> str:
    """
    Typical key generation
    """

    gpg.gen_key_input(
        name_email = _email,
        passphrase = _pass,
    )
    
    key = gpg.gen_key(input_data)

    return key
