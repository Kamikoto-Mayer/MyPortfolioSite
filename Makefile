PHONY: push

push:
	git add .
	git commit -m "$(shell date)"
	git push