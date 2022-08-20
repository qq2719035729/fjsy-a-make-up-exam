<template>
	<div id="">
		<div class="container p-3  d-none d-md-block">
			<div class="col-12">
				<div class="row">
					<div class="col-12 col-md-9 pt-4">
						<div class="row">
							<div class="jumbotron bg-light p-4 ">
								<h5 class="text-center"><strong>应用文写作模拟考试(练习)</strong></h5>
								<div class="text-left" style="font-size: 13px;">
									<p>应用文是人类在长期的社会实践活动中形成的，在处理公私事务时经常使用的实用性文体，是保证人们日常生活和工作正常运转的重要工具，是人际交往中必不可少的重要文体。是国家机关、政党、社会团体、企业事业单位在日常工作、生活中处理各种事务时，经常使用的具有明道、交际、信守和约定成俗的惯用格式文体。是人们传递信息、处理事务、交流感情的工具，有的应用文还用来作为凭证和依据。
									</p>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12 d-md-flex text-center clearfix">
								<div class="float-start col-12 col-md-3 my-3">
									<div @click="router('sunx')" @mouseenter="moveT0($event)"
										@mouseleave="moveF0($event)" class="bg-light col-11 px-5 pt-5 pb-3"
										style="cursor: pointer;">
										<p style="font-size: 25px;"><i class="bi bi-graph-up text-info"></i></p>
										<p>顺序练习</p>
									</div>
								</div>
								<div class="float-start col-12 col-md-3 my-3">
									<div @click="router('suij')" @mouseenter="moveT0($event)"
										@mouseleave="moveF0($event)" class="bg-light col-11 px-5 pt-5 pb-3"
										style="cursor: pointer;">
										<p style="font-size: 25px;"><i class="bi bi-strava text-success"></i></p>
										<p>随机练习</p>
									</div>
								</div>
								<div class="float-start col-12 col-md-3 my-3">
									<div @click="router('zhanj')" @mouseenter="moveT0($event)"
										@mouseleave="moveF0($event)" class="bg-light col-11 px-5 pt-5 pb-3"
										style="cursor: pointer;">
										<p style="font-size: 25px;"><i class=" bi bi-collection text-danger"></i></p>
										<p>章节练习</p>
									</div>
								</div>
								<div class="float-start col-12 col-md-3 my-3">
									<div @click="router('zhuanx')" @mouseenter="moveT0($event)"
										@mouseleave="moveF0($event)" class="bg-light col-11 px-5 pt-5 pb-3"
										style="cursor: pointer;">
										<p style="font-size: 25px;"><i class="bi bi-slash-circle text-warning"></i></p>
										<p>专项练习</p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12 d-flex text-center">
								<div @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
									class="col-md-3 col-12 my-3">
									<div class="bg-light col-11 px-5 pt-5 pb-3" style="cursor: pointer;">
										<p style="font-size: 25px;"><i class="bi bi-pencil-square text-primary"></i></p>
										<p>模拟考试</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-12">
						<div class="p-3">
							<div class="d-flex justify-content-between border-bottom">
								<div class="">
									<h5>应用文写作专项练习</h5>
								</div>
								<div class="">
									<span>更多</span>
								</div>
							</div>
							<ul class="list-unstyled">
								<li style="cursor: pointer;" class="mb-3">
									<i style="font-size:3vw;" class="bi bi-record-circle text-primary align-middle"></i>
									<span @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
										class="align-middle">&nbsp;&nbsp;选择题</span>
								</li>
								<li style="cursor: pointer;" class="mb-3">
									<i style="font-size:3vw;" class="align-middle bi bi-check-all text-warning"></i>
									<span @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
										class="align-middle">&nbsp;&nbsp;判断题</span>
								</li>
								<li style="cursor: pointer;" class="mb-3">
									<i style="font-size:3vw;" class="align-middle bi bi-check-square text-success"></i>
									<span @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
										class="align-middle">&nbsp;&nbsp;多选题</span>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class=" d-block d-md-none bg-light">
			<div class="col-12">
				<div class="ps-4 bg-white py-2 text-info" style="font-size: 16px;">
					<i style="font-size: 30px;"
						class="bi bi-calendar-check align-middle me-3"></i><span>应用文写作模拟考试(练习)</span>
				</div>
				<div class="mt-3 bg-white">
					<div class="p-3 border-bottom">
						应用文练习
					</div>
					<div class="ps-3">
						<div class="col-12 clearfix">
							<div class="float-start col-6 my-3">
								<div @click="router('sunx')" @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
									class="bg-light col-11 px-5 pt-5 pb-3" style="cursor: pointer;">
									<p style="font-size: 20px;"><i class="mx-3 bi bi-graph-up text-info"></i></p>
									<p>顺序练习</p>
								</div>
							</div>
							<div class="float-start col-6 my-3">
								<div @click="router('suij')" @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
									class="bg-light col-11 px-5 pt-5 pb-3" style="cursor: pointer;">
									<p style="font-size: 20px;"><i class="mx-3 bi bi-strava text-success"></i></p>
									<p>随机练习</p>
								</div>
							</div>
							<div class="float-start col-6 my-3">
								<div @click="router('zhanj')" @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
									class="bg-light col-11 px-5 pt-5 pb-3" style="cursor: pointer;">
									<p style="font-size: 20px;"><i class="mx-3 bi bi-collection text-danger"></i></p>
									<p>章节练习</p>
								</div>
							</div>
							<div class="float-start col-6 my-3">
								<div @click="router('zhuanx')" @mouseenter="moveT0($event)" @mouseleave="moveF0($event)"
									class="bg-light col-11 px-5 pt-5 pb-3" style="cursor: pointer;">
									<p style="font-size: 20px;"><i class="mx-3 bi bi-slash-circle text-warning"></i></p>
									<p>专项练习</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-3 bg-white">
					<div class="p-3 border-bottom">
						应用文模拟考试
					</div>
					<div class="p-3">
						<img
							src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/kemu1_4/files/61a1a0c6cd1515d80f8f66744b9f9335.png">
						<button type="button" class="btn btn-primary">模拟考试</button>
					</div>
				</div>
				<div class="mt-2 p-3 text-center">
					<p style="font-size: 12px;">应用文模拟考试练习</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			moveT0(e) {
				e.currentTarget.classList.add("active1");
			},
			moveF0(e) {
				e.currentTarget.classList.remove("active1")
			},
			router(r) {
				this.$router.push({
					name: r
				});
			}

		},
		created() {
			$(document).ready(
				function() {
					console.log("jquery加载成功");
				}
			)
		}
	}
</script>

<style>
	.active1 {
		color: #0dcaf0;
	}
</style>
