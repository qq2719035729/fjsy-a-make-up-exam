<template>
	<div class="">
		<div class="my-3 navbar navbar-expand-lg" style="background-color: #37b5f8;padding: 0;margin: 0;">
			<div class="container">
				<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item px-4 py-2">
							<a class="nav-link text-white" href="#">首页</a>
						</li>
						<li class="nav-item px-4 py-2 active">
							<a class="nav-link text-white" href="#">顺序练习</a>
						</li>
						<li class="nav-item px-4 py-2">
							<a class="nav-link text-white" href="#">随机练习</a>
						</li>
						<li class="nav-item px-4 py-2 dropdown">
							<a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-toggle="dropdown" aria-expanded="false">
								章节练习
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">第一单元</a>
								<a class="dropdown-item" href="#">第二单元</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">待开放</a>
							</div>
						</li>
						<li class="nav-item px-4 py-2">
							<a class="nav-link text-white" href="#">模拟考试</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="col-12">
				<div class="row">
					<div class="col-md-9 col-12">
						<ul class="breadcrumb">
							<span style="color: #999;">当前位置：</span>
							<li class="breadcrumb-item"><a href="#">首页</a></li>
							<li class="breadcrumb-item"><a href="#">模拟考试</a></li>
							<li class="breadcrumb-item active"><a>顺序练习</a></li>
						</ul>

						<div class="mt-5">
							<!--第一单元-->
							<div v-for="item in Unit.slice(setunit.s,setunit.e)">
								<p>{{item.title}}</p>
								<!--单选部分-->
								<div class="" v-for="(item1,index1) in item.content.Radio.slice(inn.l,inn.r)">
									<h5 class="mb-4">{{item1.id}}/{{sumZ}},{{item1.name}}</h5>
									<div class="ml-5">
										<ul class="list-unstyled">
											<li class="r1" @click="selectTrue($event,item.id,item1.id)"><i
													style="font-size:20px;"
													class="bi bi-circle"></i><b>A、</b><span>{{item1.A}}</span>
											</li>
											<li class="r1" @click="selectTrue($event,item.id,item1.id)"><i
													style="font-size:20px;"
													class="bi bi-circle"></i><b>B、</b><span>{{item1.B}}</span>
											</li>
											<li class="r1" @click="selectTrue($event,item.id,item1.id)"><i
													style="font-size:20px;"
													class="bi bi-circle"></i><b>C、</b><span>{{item1.C}}</span>
											</li>
											<li class="r1" @click="selectTrue($event,item.id,item1.id)"><i
													style="font-size:20px;"
													class="bi bi-circle"></i><b>D、</b><span>{{item1.D}}</span>
											</li>
										</ul>
									</div>
								</div>
								<!--判断题-->
								<div class="" v-if="timqh"
									v-for="(item1,index1) in item.content.Judge.slice(inn01.l,inn01.r)">
									<h5 class="mb-4">{{inn01.l+1+item.content.Radio.length}}/{{sumZ}},{{item1.name}}
									</h5>
									<div class="ml-5">
										<ul class="list-unstyled">
											<li class="r2" @click="selectTrue01($event,item.id,item1.id)"> <i
													style="font-size:20px;" class="bi bi-circle"></i><b>正确</b></span>
											</li>
											<li class="r2" @click="selectTrue01($event,item.id,item1.id)"> <i
													style="font-size:20px;" class="bi bi-circle"></i><b>错误</b></span>
											</li>
										</ul>
									</div>
								</div>
								<!--多选题-->
								<div class="" v-if="timqh1"
									v-for="(item1,index1) in item.content.Check.slice(inn02.l,inn02.r)">
									<h5 class="mb-4">
										{{inn02.l+1+item.content.Radio.length+item.content.Judge.length}}/{{sumZ}},{{item1.name}}
									</h5>
									<div class="ml-5">
										<ul class="list-unstyled">
											<li @click="selectTrue02($event)" class="r3"><i style="font-size:20px;"
													class="bi bi-circle"></i><b>A、</b><span>{{item1.A}}</span>
											</li>
											<li @click="selectTrue02($event)" class="r3"><i style="font-size:20px;"
													class="bi bi-circle"></i><b>B、</b><span>{{item1.B}}</span>
											</li>
											<li @click="selectTrue02($event)" class="r3"><i style="font-size:20px;"
													class="bi bi-circle"></i><b>C、</b><span>{{item1.C}}</span>
											</li>
											<li @click="selectTrue02($event)" class="r3"><i style="font-size:20px;"
													class="bi bi-circle"></i><b>D、</b><span>{{item1.D}}</span>
											</li>
											<li @click="selectTrue02($event)" class="r3"><i style="font-size:20px;"
													class="bi bi-circle"></i><b>E、</b><span>{{item1.E}}</span>
											</li>
										</ul>
										<button @click="checkClick(item.id,item1.id)" type="button"
											class="btn btn-info">确定</button>
									</div>
								</div>
							</div>
						</div>
						<div style="margin-top: 10vw;">
							<p id="ts">单选题，请选择你的答案</p>
							<div class="">
								<button type="button" @click="hotui()" class="btn btn-primary">上一题</button>
								&nbsp;
								<button type="button" @click="qianjin()" class="btn btn-primary">下一题</button>
							</div>
							<div class="mt-4 clearfix">
								<div class="me-5 float-start">
									<input type="checkbox" name="" id="" @change="boqh()"
										:value="bo" /><label>答对自动下一题</label>
								</div>
								<div class="float-start">
									<span class="me-3">答对：<span class="text-success">{{num01.z}}题</span></span><span
										class="me-3">答错：<span
											class="text-danger">{{num01.c}}题</span></span><span>准确率：{{numZql}}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-12">
						<div class="col-6 my-3 d-flex d-md-none">
							<button data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
								aria-controls="collapseExample" type="button" class="btn btn-success">题目选择展开</button>
						</div>
						<div class="border overflow-auto d-none d-md-block" style="height: 70vh;">
							<div v-for="item in Unit.slice(setunit.s,setunit.e)">
								<p>{{item.title}}</p>
								<div class="w-100">
									<p style="font-size: 15px;">单选题</p>
									<ul class="list-unstyled clearfix overflow-auto ">
										<li class="text-center border" v-for="(item1,index) in item.content.Radio"
											style="width: 30px;float: left;" :class="{'active-xx':item1.active}"
											@click="qiehuanRadio(item1.id)">{{item1.id}}</li>
									</ul>
								</div>
								<div class="w-100">
									<p style="font-size: 15px;">判断题</p>
									<ul class="list-unstyled clearfix overflow-auto">
										<li class="text-center border" v-for="(item1,index) in item.content.Judge"
											style="width: 30px;float: left;" :class="{'active-xx':item1.active}"
											@click="qiehuanJudge(item1.id)">{{item1.id}}</li>
									</ul>
								</div>
								<div class="w-100">
									<p style="font-size: 15px;">多选题</p>
									<ul class="list-unstyled clearfix overflow-auto">
										<li class="text-center border" v-for="(item1,index) in item.content.Check"
											style="width: 30px;float: left;" :class="{'active-xx':item1.active}"
											@click="qiehuanCheck(item1.id)">{{item1.id}}</li>
									</ul>
								</div>
							</div>
						</div>
						<div id="collapseExample" class="border overflow-auto collapse" style="height: 70vh;">
							<div v-for="item in Unit.slice(setunit.s,setunit.e)">
								<p>{{item.title}}</p>
								<div class="w-100">
									<p style="font-size: 15px;">单选题</p>
									<ul class="list-unstyled clearfix overflow-auto ">
										<li class="text-center border" v-for="(item1,index) in item.content.Radio"
											style="width: 30px;float: left;" :class="{'active-xx':item1.active}"
											@click="qiehuanRadio(item1.id)">{{item1.id}}</li>
									</ul>
								</div>
								<div class="w-100">
									<p style="font-size: 15px;">判断题</p>
									<ul class="list-unstyled clearfix overflow-auto">
										<li class="text-center border" v-for="(item1,index) in item.content.Judge"
											style="width: 30px;float: left;" :class="{'active-xx':item1.active}"
											@click="qiehuanJudge(item1.id)">{{item1.id}}</li>
									</ul>
								</div>
								<div class="w-100">
									<p style="font-size: 15px;">多选题</p>
									<ul class="list-unstyled clearfix overflow-auto">
										<li class="text-center border" v-for="(item1,index) in item.content.Check"
											style="width: 30px;float: left;" :class="{'active-xx':item1.active}"
											@click="qiehuanCheck(item1.id)">{{item1.id}}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
	} from 'vuex'
	export default {
		inject: ['reload'],
		data() {
			return {
				bo: false,
				bo1: false,
				//单选及全部
				inn: {
					l: 0,
					r: 1
				},
				//判断
				inn01: {
					l: 0,
					r: 1
				},
				//多选
				inn02: {
					l: 0,
					r: 1
				},
				//正确率
				num01: {
					z: 0,
					c: 0
				},
				//单元修改
				setunit: {
					s: 0,
					e: 1
				},
				userTimu: [],
				numIf: true,
				ls: 0,
				varbl: {
					b1: false,
					n1: 0
				},
				checklist: []
			}
		},
		computed: {
			...mapState([
				"Unit"
			]),
			timqh() {
				var i = this.inn.l;
				if (i >= this.Unit[this.ls].content.Radio.length) {
					$("#ts").text("判断题，请选择你的答案");
					return true;
				} else {
					return false;
				}

			},
			timqh1() {
				var i = this.inn.l;
				var j = this.inn01.l;
				var sumHc = (this.Unit[this.ls].content.Radio.length + this.Unit[this.ls].content.Judge.length) - 1;
				if (i > sumHc) {
					$("#ts").text("多选题，请选择你的答案");
					return true;
				} else {
					return false;
				}
				return false;
			},
			sumZ() {
				var num = 0;
				/* for (var i = 0; i < this.Unit.length; i++) {
					num += this.Unit[i].content.Radio.length + this.Unit[i].content.Judge.length + this.Unit[i].content
						.Check.length;
				} */
				num = this.Unit[this.varbl.b1].content.Radio.length + this.Unit[this.varbl.b1].content.Judge.length + this.Unit[this.varbl.b1].content
					.Check.length;
				return num;
			},
			numZql() {
				var num = 0;
				if (this.num01.z == 0 || this.num01.c == 0) {
					return num + "%";
				} else {
					num = this.num01.z / (this.num01.c + this.num01.z);
					num = num.toFixed(2);
					num = num * 100 + "%";
				}
				return num;
			}
		},
		methods: {
			//切换是否自动下一题
			boqh() {
				if (this.bo) {
					this.bo = false;
				} else {
					this.bo = true;
				}
			},
			//设置单选题选中的选项
			selectTrue(e, index, index1) {
				index1 -= 1;
				if (this.numIf) {
					if (e.currentTarget.children[2].innerHTML == this.Unit[index].content.Radio[index1].answer) {
						e.currentTarget.children[0].classList.remove("bi-circle", "text-dark");
						e.currentTarget.children[0].classList.add("bi-check-circle", "text-info");
						this.num01.z += 1;
						this.numIf = false;
						this.bo1 = true;
					} else {
						this.bo1 = false;
						e.currentTarget.children[0].classList.remove("bi-circle", "text-dark");
						e.currentTarget.children[0].classList.add("bi-x-circle-fill", "text-danger");
						this.num01.c += 1;
						var ra = $(".r1 span");
						for (var i = 0; i < ra.length; i++) {
							if (ra[i].innerHTML == this.Unit[index].content.Radio[index1].answer) {
								$(".r1 i").eq(i).removeClass("bi-circle text-dark");
								$(".r1 i").eq(i).addClass("bi-check-circle text-info");
								break;
							}
						}
						this.numIf = false;
					}
					/* this.userTimu.push({
						aid: index,
						bid: index1,
						answer: e.currentTarget.children[2].innerHTML,
						answertrue: this.Unit[index].content.Radio[index1].answer
					}); */
					this.userTimu.push({
						aid: index,
						bid: index1,
						answer: e.currentTarget.children[2].innerHTML,
						answertrue: this.Unit[index].content.Radio[index1].answer
					});
					if (this.bo) {
						if (this.bo1) {
							this.inn.l += 1;
							this.inn.r += 1;

							this.numIf = true;
							this.classHf(0);
						}
					}

					$("#ts").text("单选题，请选择你的答案");
				}
			},
			//判断题
			selectTrue01(e, index, index1) {
				var boo;
				if (this.numIf) {
					index1 -= 1;
					switch (e.currentTarget.children[1].innerHTML) {
						case "正确":
							boo = true;
							break;
						case "错误":
							boo = false;
							break;
					}
					if (boo == this.Unit[index].content.Judge[index1].answer) {
						e.currentTarget.children[0].classList.remove("bi-circle", "text-dark");
						e.currentTarget.children[0].classList.add("bi-check-circle", "text-info");
						this.num01.z += 1;
						this.numIf = false;
						this.bo1 = true;
					} else {
						this.bo1 = false;
						e.currentTarget.children[0].classList.remove("bi-circle", "text-dark");
						e.currentTarget.children[0].classList.add("bi-x-circle-fill", "text-danger");
						this.num01.c += 1;
						if (boo == this.Unit[index].content.Judge[index1].answer) {
							$(".r1 i").eq(0).removeClass("bi-circle text-dark");
							$(".r1 i").eq(0).addClass("bi-check-circle text-info");
						}
						this.numIf = false;
					}
				}
				this.userTimu.push({
					aid: index,
					bid: index1,
					answer: boo,
					answertrue: this.Unit[index].content.Judge[index1].answer
				});
				if (this.bo) {
					if (this.bo1) {
						this.inn.l += 1;
						this.inn.r += 1;
						if (this.timqh) {
							if (this.inn.l != this.Unit[this.varbl.n1].content.Radio.length) {
								this.inn01.l++;
								this.inn01.r++;
							}
						}
						this.numIf = true;
						this.classHf(1);
					}
				}
				$("#ts").text("判断题，请选择你的答案");
			},
			//多选题
			selectTrue02(e) {
				var list = this.checklist;
				var bors = false;
				if (this.numIf) {
					for (var i = 0; i < list.length; i++) {
						if (list[i] == e.currentTarget.children[2].innerHTML) {
							list.splice(i, 1);
							e.currentTarget.children[0].classList.add("bi-circle", "text-dark");
							e.currentTarget.children[0].classList.remove("bi-check-circle", "text-info");
							console.log(list);
							return;
						}
					}
					list.push(e.currentTarget.children[2].innerHTML);
					e.currentTarget.children[0].classList.remove("bi-circle", "text-dark");
					e.currentTarget.children[0].classList.add("bi-check-circle", "text-warning");
				}
			},
			//多选提交
			checkClick(inne, in1) {
				in1 -= 1;
				//标准答案
				var num1 = this.Unit[inne].content.Check[in1];
				//你选择的答案
				var num2 = this.checklist;
				//判断是否正确
				var logj = false;
				var r = $(".r3");
				for (var i = 0; i < r.length; i++) {
					for (var j = 0; j < num1.answer.length; j++) {
						if (r.eq(i).children("span").text() == num1.answer[j]) {
							r.eq(i).children("i").removeClass("bi-circle text-dark text-warning");
							r.eq(i).children("i").addClass("bi-check-circle text-info");
						}
					}
				}
				/* for (var i = 0; i < num1.answer.length; i++) {
					for (var j = 0; i < num2.length; i++) {

					}
				} */
				$("#ts").html("正确答案是：<b class='text-danger'>" + num1.answer + "</b><br>你选择的答案是:<b class='text-info'>" +
					num2 + "</b>");
				this.numIf = false;
			},
			//回复默认类样式
			classHf(id) {
				var ra;
				switch (id) {
					case 0:
						ra = $(".r1 i");
						break;
					case 1:
						ra = $(".r2 i");
						break;
					case 2:
						ra = $(".r3 i");
						break;
				}
				for (var i = 0; i < ra.length; i++) {
					ra[i].classList.remove("bi-x-circle-fill", "bi-check-circle", "text-danger", "text-info");
					ra[i].classList.add("bi-circle", "text-dark");
				}
			},
			//恢复答题纪录
			timuhf() {
				var num1 = {
					s: this.inn.l,
					e: this.inn.r
				}
				var num2 = {
					aid: this.userTimu[num1.s].aid,
					bid: this.userTimu[num1.s].bid,
					answer: this.userTimu[num1.s].answer,
					answerT: this.userTimu[num1.s].answertrue
				}
				$("#ts").html("正确答案：<span class='text-danger me-3'>" + num2.answerT +
					"</span><br>你输入的答案是：<span class='text-info'>" + num2.answer + "</span>")
			},
			//下一页
			qianjin() {
				this.inn.l += 1;
				this.inn.r += 1;
				this.fotin(this.inn.l, this.inn.r, 0, this.varbl.n1);
				if (this.timqh) {
					this.inn01.l++;
					this.inn01.r++;
					this.fotin(this.inn01.l, this.inn01.r, 1, this.varbl.n1);
				}
				if (this.timqh1) {
					this.inn02.l++;
					this.inn02.r++;
					this.fotin(this.inn02.l, this.inn02.r, 1, this.varbl.n1);
				}
				for (var i = 0; i < 3; i++) {
					this.classHf(i);
				}
				this.numIf = true;
				this.setUnitActive();
				$("#ts").text("请选择你的答案");
				//this.timuhf();
			},
			//上一页
			hotui() {
				this.inn.l--;
				this.inn.r--;
				this.fotin(this.inn.l, this.inn.r, 0, this.varbl.n1);
				if (this.timqh) {
					this.inn01.l--;
					this.inn01.r--;
					this.fotin(this.inn01.l, this.inn01.r, 2, this.varbl.n1);
				}
				if (this.timqh1) {
					this.inn02.l--;
					this.inn02.r--;
				}
				for (var i = 0; i < 3; i++) {
					this.classHf(i);
				}
				this.numIf = false;
				this.reload;
				this.timuhf();

			},
			//页面切换功能(单选)
			qiehuanRadio(index) {
				this.inn.l = index - 1;
				this.inn.r = index;
			},
			//页面切换功能(判断)
			qiehuanJudge(index) {
				this.inn.l = this.Unit[this.varbl.n1].content.Radio.length - 1 + index;
				this.inn.r = this.Unit[this.varbl.n1].content.Radio.length + index;
				this.inn01.l = index - 1;
				this.inn01.r = index;
			},
			//页面切换功能(多选)
			qiehuanCheck(index) {
				this.inn.l = this.Unit[this.varbl.n1].content.Radio.length + this.Unit[this.varbl.n1].content.Judge
					.length - 1 + index;
				this.inn.r = this.Unit[this.varbl.n1].content.Radio.length + this.Unit[this.varbl.n1].content.Judge
					.length + index;
				this.inn01.l = this.Unit[this.varbl.n1].content.Judge.length - 1 + index;
				this.inn01.r = this.Unit[this.varbl.n1].content.Judge.length + index;
				this.inn02.l = index - 1;
				this.inn02.r = index;
			},
			//选项遍历修改属性
			fotin(a, b, c, d) {
				/* a是编号的起点，b是编号的末尾，c是题目的类型，d是单元的筛选；
				  其中c分为0，1，2对应选择题，判断题，多选题 */
				a += 1;
				if (c == 0) {
					var r1e = this.Unit[d].content.Radio;
					for (var i = 0; i < r1e.length; i++) {
						if (r1e[i].id == a) {
							r1e[i].active = true;
						} else {
							r1e[i].active = false;
						}
					}
				} else if (c == 1) {
					var r1e = this.Unit[d].content.Judge;
					for (var i = 0; i < r1e.length; i++) {
						if (r1e[i].id == a) {
							r1e[i].active = true;
						} else {
							r1e[i].active = false;
						}
					}
				} else if (c == 2) {
					var r1e = this.Unit[d].content.Check;
					for (var i = 0; i < r1e.length; i++) {
						if (r1e[i].id == a) {
							r1e[i].active = true;
						} else {
							r1e[i].active = false;
						}
					}
				}
			},
			//修改单元方法
			setUnitActive() {
				var sum = this.Unit[this.varbl.n1].content.Check.length + this.Unit[this.varbl.n1].content.Judge.length +
					this
					.Unit[this.varbl.n1].content.Radio.length;
				if (this.inn.l >= sum) {
					this.setunit.s++;
					this.setunit.e++;
					this.inn.l = 0;
					this.inn.r = 1;
					this.inn01.l = 0;
					this.inn01.r = 1;
					this.inn02.l = 0;
					this.inn02.r = 1;
					this.varbl.b1++;
				}
			}
		},
		created(){
			this.varbl.b1=this.setunit.s;
		}
	}
</script>

<style>
	@import url("bootstrap/dist/css/bootstrap.css");

	.active-xx {
		background-color: #000000;
		color: #fff;
	}

	.breadcrumb {
		font-size: 12px !important;
	}

	.breadcrumb>li+li:before {
		color: #999 !important;
		content: "> " !important;
	}

	.breadcrumb>li {
		color: #999;

	}


	.breadcrumb>li a {
		color: #999;
		text-decoration: none;
	}

	.breadcrumb>li.active {
		color: #000 !important;
		font-weight: 500;

	}
</style>
