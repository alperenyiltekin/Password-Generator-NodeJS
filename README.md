# Password Generator with Node JS

## Definitions
This is console application and you can run this program any folder path.
Thanks to `npm link`  you can use as global command. <br>
This generator contains, all letters, symbols and numbers. So, we can generate more complicated password.

## Running
The below command for the generating password commmand. This program generating password default length = 8
```bash
pwgen
```

## Parameters

`-l, --length` = You can choose password length <br/>
```bash
pwgen --length=20
```
`--nn` = If you don't want numbers in the password, use this params<br/>
```bash
pwgen -nn
```
`--ns` = If you don't want any symbol add this parameter
```bash
pwgen --ns
```
`--save` = Generated password also saved in password.txt file 
```bash
pwgen
```
You can any parameters you wants
```bash
pwgen --length=40 --nn --ns
```
