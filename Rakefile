task :default =>  ['workspace']

directory 'target'

desc "Create a transient workspace in #{FileUtils.pwd}/target"
task :workspace => 'target' do
  FileUtils.cp_r('bin', 'target', :verbose => true)
  FileUtils.cp_r('conf', 'target', :verbose => true)
  FileUtils.cp_r('lib', 'target', :verbose => true)
  FileUtils.cp_r('web', 'target', :verbose => true)
end

desc "Remove the workspace"
task :clean do
  FileUtils.rm_rf('target', :verbose => true)
end
