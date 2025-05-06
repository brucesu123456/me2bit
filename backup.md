# 1， 备份

- windows clone 非标文件名的方法：
```
git clone -c core.protectNTFS=false -c core.longpaths=true https://github.com/brucesu123456/me2bit.git
```

	- clone后，执行以下命令：
```
cd me2bit
git config core.protectNTFS false
git config core.longpaths true
git restore --source=HEAD :/
```