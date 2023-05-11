
document.querySelector('form input[type=file]').addEventListener('change', () => {
    if (document.querySelector('form input[type=file]').files.length > 0)
        document.querySelector('form label span').style.background = '#000';
})
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('form input[name=title]').value;
    let body = document.querySelector('form input[name=body]').value;
    let icon = document.querySelector('form input[type=file').files[0];
    if (Push.Permission.get() != "granted") {
        Push.Permission.request();
    } else {
        var GetFile = new FileReader();

        GetFile.onload = function () {
            let result = GetFile.result;
            Push.create(title, {
                body: body,
                Timeout: 2000,
                icon: result,
                onClick: function () {
                    alert("function finalizada.....");
                }
            });
        }

       if(icon != null) GetFile.readAsDataURL(icon);
       else {
        Push.create(title, {
            body: body,
            Timeout: 2000,
            onClick: function () {
                alert("function finalizada.....");
            }
        });
       }
    }
    document.querySelector('form').submit();
})