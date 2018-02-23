<test>
  <div>
    Test tag mounted. Next line should show something. But it's broken.
    <div if={visible == 'yes'}>Success!</div>
  </div>

  <script>
    this.visible = 'yes'
    this.on('mount', ()=>{
      this.update()
    })
  </script>
</test>
