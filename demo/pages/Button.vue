<template>
	<div class="container">
		<div class="component-box">
			<div class="component-box-top">
				<wd-button size="large" icon="bi-github">普通按钮</wd-button>
				<wd-button
					size="large"
					type="primary"
					round-shape="none"
					icon="home-outlined"
					:loading="true"
					@click="clickHandler"
					>主要按钮</wd-button
				>
				<wd-button size="large" type="danger">危险按钮</wd-button>
				<wd-button size="large" type="success">成功按钮</wd-button>
				<wd-button size="large" type="dashed">dashed按钮</wd-button>
				<wd-button size="large" type="info">info按钮</wd-button>
				<wd-button size="large" type="text">text按钮</wd-button>
				<wd-button size="large" disabled="true" type="primary"
					>按钮不可用</wd-button
				>
				<wd-icon icon="bi-github" />
			</div>
			<div class="component-box-bottom">
				<div class="component-title">不同样式按钮</div>
				<div class="component-desc">
					通过设置type属性，可以设置按钮的不同样式：primary | danger | success |
					dashed | info | text
				</div>
			</div>
		</div>
		<div class="component-box">
			<div class="component-box-top">
				<wd-button size="large" icon="filter-filled">普通按钮</wd-button>
				<wd-button
					size="large"
					type="primary"
					round-shape="none"
					icon="home-outlined"
					@click="clickHandler"
					>主要按钮</wd-button
				>
				<wd-button size="small" type="danger">危险按钮</wd-button>
				<wd-button size="large" type="success">成功按钮</wd-button>
				<wd-button size="small" type="dashed">dashed按钮</wd-button>
				<wd-button type="info">info按钮</wd-button>
				<wd-button size="small" type="text">text按钮</wd-button>
				<wd-button size="large" disabled="true" type="primary"
					>按钮不可用</wd-button
				>
			</div>
			<div class="component-box-bottom">
				<div class="component-title">不同尺寸按钮</div>
				<div class="component-desc">
					通过设置size属性，可以设置按钮的大小：small | middle | large
				</div>
			</div>
		</div>
		<div class="component-box">
			<div class="component-box-top">
				<wd-button
					size="large"
					type="primary"
					round-shape="none"
					icon="home-outlined"
					@click="clickHandler"
					>主要按钮</wd-button
				>
				<wd-button size="small" round-shape="circle" type="primary"
					>C</wd-button
				>
			</div>
			<div class="component-box-bottom">
				<div class="component-title">不同样式按钮</div>
				<div class="component-desc">
					通过设置round-shape属性，可以设置按钮的形状：circle | none
				</div>
			</div>
		</div>
		<div class="component-box">
			<div class="component-box-top">
				<wd-button-group size="small" type="success">
					<wd-button
						round-shape="none"
						icon="home-outlined"
						@click="clickHandler"
						>成功按钮</wd-button
					>
					<wd-button
						size="large"
						round-shape="none"
						icon="upload-outlined"
						type="primary"
						@click="clickHandler"
					>
						主要按钮
					</wd-button>
					<wd-button
						round-shape="none"
						icon="home-outlined"
						type="primary"
						@click="clickHandler"
						>按钮</wd-button
					>
					<wd-button round-shape="circle" type="primary">C</wd-button>
				</wd-button-group>
			</div>
			<div class="component-box-bottom">
				<div class="component-title">ButtonGroup</div>
				<div class="component-desc">
					通过设置round-shape属性，可以设置按钮的形状：circle | none
				</div>
			</div>
		</div>
		<!-- <fieldset>
            <legend>按钮</legend>
            <wd-button 
                icon="filter-filled">普通按钮</wd-button>
            <wd-button 
                size="large" 
                type="primary"
                round-shape="none"
                icon="home-outlined"
                @click="clickHandler">主要按钮</wd-button>
            <wd-button 
                size="small" 
                type="danger">危险按钮</wd-button>
            <wd-button 
                size="small" 
                type="success">成功按钮</wd-button>
            <wd-button 
                size="small" 
                type="dashed">dashed按钮</wd-button>    
            <wd-button 
                size="small" 
                type="info">info按钮</wd-button>
            <wd-button 
                size="small" 
                type="text">text按钮</wd-button>
            <wd-button 
                size="large" 
                disabled="true"
                type="primary">按钮不可用</wd-button>
            <wd-button 
                size="small" 
                round-shape="circle"
                type="primary">C</wd-button>
        </fieldset> -->
		<!-- <fieldset>
            <legend>link</legend>
            <wd-link
                :underline="true"
                href="https://www.baidu.com"
                type="primary">这是一个主要链接</wd-link>
            <wd-link
                :disabled="true"
                href="https://www.baidu.com"
                type="success">这是一个成功链接</wd-link>
            <wd-link
                href="https://www.baidu.com"
                type="warning">这是一个警告链接</wd-link>
            <wd-link
                href="https://www.baidu.com"
                type="danger">这是一个错误链接</wd-link>
            <wd-link
                href="https://www.baidu.com"
                type="info">这是一个info链接</wd-link>
        </fieldset> -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Button',
	setup() {
		let a = '111';
	},
});
</script>
<style lang="less" scoped>
.component-box {
	width: 500px;
	min-height: 200px;
	border: 1px solid #f0f0f0;
	background: #ffffff;
	display: inline-block;
	margin-right: 10px;
}
.component-box-top {
	width: 100%;
	height: 80%;
	border-bottom: 1px solid #f0f0f0;
	padding: 10px 20px;
}
.component-box-bottom {
	position: relative;
	width: 100%;
	min-height: 100px;
}
.component-title {
	height: 30px;
	background: #ffffff;
	position: absolute;
	top: -11px;
	left: 20px;
	padding: 0 10px;
	color: #000000;
	font-weight: 500;
}
.component-desc {
	padding: 20px 10px 10px 10px;
}
</style>
