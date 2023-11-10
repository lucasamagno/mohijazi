<template> 
  <div class="content-container">
    <h1>Mo Hijazi</h1>
    <p>I'm just curious</p>

    <div class="button-container">
      <a href="https://drive.google.com/file/d/1ly18c8E3PIro8T6-G7JWOS_VRM04xpLD/view" target="_blank" rel="noopener noreferrer" class="button-link">
          Resume
      </a>
      <router-link to="/work" class="button-link">Work</router-link>
      <router-link to="/education" class="button-link">Education</router-link>
    </div>
  </div>
</template>

<script>
console.log("HEY YOU FOUND ME :)")
</script>

<style>
h1 {
    font-size: 5rem;
    color: black;
    margin-bottom: 0.5rem;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-link {
  display: block;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: black;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  border: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.button-link:hover {
  background-color: #333;
}
</style>