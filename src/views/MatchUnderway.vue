<template>
  <div class="matchUnderway">
    <h1>Match Underway</h1>


    <div class="matchStats">
      <h2>There should be a component here that has a few different tabs:</h2>
      <ul>
        <li>Match History (graph)</li>
        <li>Wrestler's info (both on web, tab per wrestler on mobile)</li>
        <li>other wrestler (on mobile)</li>
        <li>Current Bracket</li>
        <li>Stats</li>
      </ul>
    </div>


    <div class="score">
      <h2>Here is where the score should be</h2>
      <p>BLUE: {{blueScore}}   |    RED: {{redScore}}</p>
    </div>


    <div class="matchActions">

      <ul class ="blueActions">
        <li v-show="neutral">blue Takedown</li>
        <li v-show="redControl">blue Escape</li>
        <li v-show="redControl">blue Reversal</li>
        <li v-show="blueControl">blue Nearfall2</li>
        <li v-show="blueControl">blue Nearfall3</li>
        <li v-show="blueControl">blue Nearfall4</li>
        <li v-show="blueControl || redControl">blue Pin</li>
        <li>blue Penalty</li>
      </ul>

      <ul class ="redActions">
        <li v-show="neutral">Red Takedown</li>
        <li v-show="blueControl">Red Escape</li>
        <li v-show="blueControl">Red Reversal</li>
        <li v-show="redControl">Red Nearfall2</li>
        <li v-show="redControl">Red Nearfall3</li>
        <li v-show="redControl">Red Nearfall4</li>
        <li v-show="redControl || blueControl">Red Pin</li>
        <li>Red Penalty</li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  data : function () {
    return {
      blueScore: 0,
      redScore: 0,
      neutral: false,
      blueControl: true,
      redControl: false,
      pause: false
    }
  }
}
</script>

<style lang="css">
</style>
