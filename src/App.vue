<template>
	<div class="app-container">
		<!-- <router-link to="/">home</router-link>
		<router-link to="/about">about</router-link>
		<router-view /> -->
		<a-layout id="components-layout-demo-custom-trigger">
			<a-layout-sider v-model="collapsed" :trigger="null" collapsible>
				<div class="logo"></div>
				<a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
					<a-menu-item key="1">
						<a-icon type="user" />
						<span>
							<router-link to="/" active-class="link-active">nav1</router-link>
						</span>
					</a-menu-item>
					<a-menu-item key="2">
						<a-icon type="video-camera" />
						<span>
							<router-link to="/about" active-class="link-active">nav2</router-link>
						</span>
					</a-menu-item>
					<a-menu-item key="3">
						<a-icon type="upload" />
						<span>
							<router-link to="/" active-class="link-active">nav3</router-link>
						</span>
					</a-menu-item>
				</a-menu>
			</a-layout-sider>
			<a-layout>
				<a-layout-header style="background: #fff; padding: 0">
					<a-icon 
						class="trigger"
						:type="collapsed ? 'menu-unfold' : 'menu-fold'"
						@click="() => (collapsed = !collapsed)" 
					/>
				</a-layout-header>
				<a-layout-content
					:style="{margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px'}"
				>
					<router-view />
				</a-layout-content>
			</a-layout>
		</a-layout>
	</div>
</template>

<script>
export default {
	data() {
		return {
			collapsed: false
		};
	}
};
</script>

<style scoped>
.app-container {
	height: 100%;
}
.ant-layout {
	height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
	color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px;
}
.link-active {
	color: #fff;
}
a {
	color: #fff;
}
</style>