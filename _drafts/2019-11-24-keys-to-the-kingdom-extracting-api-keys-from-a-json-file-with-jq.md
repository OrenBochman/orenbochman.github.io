Docker stuff


1. Docker lets you install stuff in a way that avoids dependency conflicts
2. 

Jupyter Notebook

docker run -p 10000:8888 jupyter/scipy-notebook:b418b67c225b
docker run -it --rm -p 10000:8888 -v "${PWD}":/home/jovyan/work jupyter/datascience-notebook:b418b67c225b


Airflow

1. Check docker memory if >=4 GB
	docker run --rm "debian:buster-slim" bash -c 'numfmt --to iec $(echo $(($(getconf _PHYS_PAGES) * $(getconf PAGE_SIZE))))'
￼
2. Getting airflow compose file
	curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.2.3/docker-compose.yaml'
3. build
	docker-compose up airflow-init
4. start
	docker-compose up
￼